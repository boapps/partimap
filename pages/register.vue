<script setup lang="ts">
definePageMeta({
	middleware: ['public-only'],
});

const localePath = useLocalePath();
const { locale, t } = useI18n();

useHead({
	title: t('register.title'),
});

const email = ref('');
const emailInput = ref<HTMLInputElement>();
const name = ref('');
const password = ref('');
const consentTerms = ref(false);
const consentPrivacy = ref(false);
const loading = ref(true);

onMounted(async () => {
	loading.value = false;
	emailInput.value?.focus();
});

const captcha = ref();
const { errorToast } = useToasts();

async function userReg() {
	if (!captcha.value) return;
	try {
		loading.value = true;
		await $fetch('/api/user/register', {
			method: 'POST',
			body: {
				captcha: captcha.value,
				consent: consentTerms.value && consentPrivacy.value,
				email: email.value,
				locale: locale.value,
				name: name.value,
				password: password.value,
			},
		});
		navigateTo(
			localePath({
				path: 'login',
				query: { registered: null },
			}),
		);
	} catch (err) {
		errorToast(t('register.registrationFailed'));
	} finally {
		loading.value = false;
	}
}
</script>

<template>
	<!-- eslint-disable vue/no-v-html -->
	<div class="container d-flex flex-column flex-grow-1">
		<div class="row flex-grow-1">
			<div class="col col-sm-10 col-md-8 col-lg-6 m-auto">
				<form @submit.prevent="userReg">
					<div class="card shadow-sm">
						<CardHeader :text="$t('register.title')" />
						<div class="card-body">
							<form-group :label="$t('register.email')">
								<input
									ref="emailInput"
									v-model="email"
									class="form-control"
									required
									type="email"
								/>
							</form-group>
							<form-group :label="$t('register.name')">
								<input
									v-model="name"
									class="form-control"
									required
								/>
							</form-group>
							<form-group :label="$t('register.password')">
								<input
									v-model="password"
									class="form-control"
									required
									type="password"
								/>
							</form-group>
							<form-group>
								<div class="form-check">
									<input
										id="consentTerms"
										v-model="consentTerms"
										class="form-check-input"
										name="consentTerms"
										required
										type="checkbox"
									/>
									<label
										for="consentTerms"
										class="form-check-label"
									>
										{{ $t('legal.consentTerms1') }}
										<a
											:href="localePath('/terms')"
											target="_blank"
											v-html="$t('legal.consentTerms2')"
										/>
									</label>
								</div>
								<div class="form-check mt-2">
									<input
										id="consentPrivacy"
										v-model="consentPrivacy"
										class="form-check-input"
										name="consentPrivacy"
										required
										type="checkbox"
									/>
									<label
										for="consentPrivacy"
										class="form-check-label"
									>
										{{ $t('legal.consentPrivacy1') }}
										<a
											:href="localePath('/privacy')"
											target="_blank"
											v-html="$t('legal.consentPrivacy2')"
										/>
									</label>
								</div>
							</form-group>

							<p class="m-0 small text-muted">
								{{ $t('register.procedure') }}
							</p>

							<NuxtTurnstile v-model="captcha" />
						</div>
						<div class="card-footer d-flex justify-content-between">
							<b-button
								:to="localePath('/login')"
								variant="link"
							>
								{{ $t('register.login') }}
							</b-button>
							<b-button
								type="submit"
								variant="primary"
							>
								{{ $t('register.submit') }}
							</b-button>
						</div>
						<LoadingOverlay :show="!captcha || loading" />
					</div>
				</form>
			</div>
		</div>
	</div>
</template>
