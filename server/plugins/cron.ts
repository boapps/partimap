import { useScheduler } from '#scheduler';
import * as db from '~/server/data/projects';

const SUB_DAILY_HOUR = Number(process.env.SUB_DAILY_HOUR) || 8;
const SUB_EVENTS_DEBOUNCE_MINS = Number(process.env.SUB_EVENTS_DEBOUNCE_MINS) || 60;

export default defineNitroPlugin(() => {
	if (process.env.APP_ENV === 'build') return; // skip during build

	const scheduler = useScheduler();
	scheduler.run(sendDailyNotifications).dailyAt(SUB_DAILY_HOUR, 0);
	scheduler.run(sendEventBasedNotifications).everyFiveMinutes();
});

async function sendDailyNotifications() {
	const projects = await db.dataForDailyNotifications();
	sendNotifications(projects);
}

async function sendEventBasedNotifications() {
	const projects = await db.dataForEventBasedNotifications(SUB_EVENTS_DEBOUNCE_MINS);
	sendNotifications(projects);
}

async function sendNotifications(projects: db.NotificationData[]) {
	const {
		public: { baseUrl },
	} = useRuntimeConfig();
	for (let i = 0; i < projects.length; i++) {
		const p = projects[i]!;
		const m = i18n(p.lang).notificationEmail;
		const projectUrl = `${baseUrl}/${p.lang}/admin/project/${p.id}`;
		const reportUrl = `${baseUrl}/${p.lang}/admin/projects?dlr=${p.id}`;
		const unsubscribeUrl = `${baseUrl}/${p.lang}/unsubscribe?id=${p.id}&token=${p.unsubscribeToken}`;
		const subject = m.subject.replace(/\{title\}/g, p.title);
		const body = (p.newSubmissions === 1 ? m.body_one : m.body_other)
			.replace(/\{user\}/g, p.name)
			.replace(/\{title\}/g, p.title)
			.replace(/\{submissions\}/g, String(p.submissions))
			.replace(/\{newSubmissions\}/g, String(p.newSubmissions))
			.replace(/\{projectUrl\}/g, projectUrl)
			.replace(/\{reportUrl\}/g, reportUrl)
			.replace(/\{unsubscribeUrl\}/g, unsubscribeUrl);

		try {
			await sendEmail(p.email, subject, body, unsubscribeUrl);
			await db.updateLastSent(p.id);
		} catch (error) {
			console.error(error);
		}
	}
}
