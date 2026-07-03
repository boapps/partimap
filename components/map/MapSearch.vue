<script setup lang="ts">
import Feature from 'ol/Feature';
import type Map from 'ol/Map';
import Point from 'ol/geom/Point';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { transform, transformExtent } from 'ol/proj';
import { Circle, Fill, Stroke, Style } from 'ol/style';

interface NominatimResult {
	place_id: number;
	display_name: string;
	lat: string;
	lon: string;
	boundingbox: [string, string, string, string]; // [minlat, maxlat, minlon, maxlon]
}

const { t } = useI18n();
const map = inject<Map | undefined>('map');
const { sidebarVisible } = useStore();

const query = ref('');
const results = ref<NominatimResult[]>([]);
const loading = ref(false);

const markerSource = new VectorSource();
const markerLayer = new VectorLayer({
	source: markerSource,
	style: new Style({
		image: new Circle({
			radius: 8,
			fill: new Fill({ color: 'rgba(0, 0, 0, 0.85)' }),
		}),
	}),
	zIndex: 100,
});

onMounted(() => map?.addLayer(markerLayer));
onUnmounted(() => map?.removeLayer(markerLayer));

async function search() {
	if (!query.value.trim()) return;
	loading.value = true;
	try {
		const url = `https://nominatim.openstreetmap.org/search?format=json&limit=10&q=${encodeURIComponent(query.value)}`;
		const res = await fetch(url);
		results.value = await res.json();
	} catch {
		results.value = [];
	} finally {
		loading.value = false;
	}
}

function selectResult(result: NominatimResult) {
	const [minlat, maxlat, minlon, maxlon] = result.boundingbox.map(Number);
	const extent = transformExtent(
		[minlon, minlat, maxlon, maxlat],
		GOOGLEMAPS_PROJECTION,
		PARTIMAP_PROJECTION,
	);
	map?.getView().fit(extent, {
		duration: 200,
		padding: [80, 80, 80, 80],
	});

	const coord = transform(
		[Number(result.lon), Number(result.lat)],
		GOOGLEMAPS_PROJECTION,
		PARTIMAP_PROJECTION,
	);
	markerSource.clear();
	markerSource.addFeature(new Feature(new Point(coord)));

	results.value = [];
}

function onBlur() {
	results.value = [];
}
</script>

<template>
	<div
		class="position-absolute map-search-container"
		:class="{ 'sidebar-open': sidebarVisible }"
	>
		<div class="d-flex flex-column">
			<div class="d-flex shadow-sm">
				<input
					v-model="query"
					autocomplete="off"
					class="form-control rounded-0 border-secondary"
					style="border-radius: 0.5rem 0 0 0.5rem !important"
					:placeholder="t('Map.search')"
					@blur="onBlur"
					@keyup.enter="search"
				/>
				<button
					class="btn btn-dark border border-secondary border-start-0 rounded-0 py-2"
					style="border-radius: 0 0.5rem 0.5rem 0 !important"
					@mousedown.prevent="search"
				>
					<i
						v-if="loading"
						class="fas fa-spinner fa-spin"
					/>
					<i
						v-else
						class="fas fa-search"
					/>
				</button>
			</div>

			<div
				v-if="results.length"
				class="list-group shadow mt-1"
				style="max-height: 300px; overflow-y: auto; border-radius: 0.5rem"
			>
				<button
					v-for="result in results"
					:key="result.place_id"
					class="list-group-item list-group-item-action py-2 text-start"
					style="font-size: 0.85rem"
					@mousedown.prevent="selectResult(result)"
				>
					{{ result.display_name }}
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped>
.map-search-container {
	top: 0.5rem;
	left: 50%;
	transform: translateX(-50%);
	z-index: 1;
	max-width: calc(100% - 1rem);

	input {
		min-width: 220px;
	}
}

@media (max-width: 767.98px) {
	.map-search-container.sidebar-open {
		display: none;
	}
}

@media (max-width: 575.98px) {
	.map-search-container {
		left: auto;
		right: 4rem;
		transform: none;
		max-width: calc(100% - 10rem);

		input {
			min-width: 0;
		}
	}
}
</style>
