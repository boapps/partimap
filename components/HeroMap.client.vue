<script setup lang="ts">
import type { Feature as OlFeature, Map, View } from 'ol';
import type { Coordinate } from 'ol/coordinate';
import DoubleClickZoom from 'ol/interaction/DoubleClickZoom';
import KeyboardPan from 'ol/interaction/KeyboardPan';
import KeyboardZoom from 'ol/interaction/KeyboardZoom';
import MouseWheelZoom from 'ol/interaction/MouseWheelZoom';
import { transform } from 'ol/proj';
import { Circle, Fill, Stroke, Style } from 'ol/style';

const GOOGLEMAPS_PROJECTION = 'EPSG:4326';
const PARTIMAP_PROJECTION = 'EPSG:3857';

const { t } = useI18n();
const coords = t('Map.initialCenter').split(',');
const gm2ol = (c: number[]) => transform(c, GOOGLEMAPS_PROJECTION, PARTIMAP_PROJECTION);
const initialCenter = gm2ol(coords.reverse().map((p) => Number(p)));
const initialZoom = Number(t('Map.initialZoom')) || 10;

const mapRef = ref<{ map: Map }>();
const viewRef = ref<{ view: View }>();

onMounted(() => {
	const map = mapRef.value?.map;
	if (!map) return;
	map.getInteractions().forEach((interaction) => {
		if (
			interaction instanceof MouseWheelZoom ||
			interaction instanceof DoubleClickZoom ||
			interaction instanceof KeyboardPan ||
			interaction instanceof KeyboardZoom
		) {
			map.removeInteraction(interaction);
		}
	});
});

function zoomIn() {
	const view = viewRef.value?.view;
	if (!view) return;
	view.animate({ zoom: (view.getZoom() || 0) + 1, duration: 200 });
}

function zoomOut() {
	const view = viewRef.value?.view;
	if (!view) return;
	view.animate({ zoom: (view.getZoom() || 0) - 1, duration: 200 });
}

const pinnedCoord = ref<Coordinate | null>(null);

function selectLocation() {
	const view = viewRef.value?.view;
	if (!view) return;
	pinnedCoord.value = view.getCenter() || null;
}

function pinStyle(_f: OlFeature) {
	return new Style({
		image: new Circle({
			radius: 8,
			fill: new Fill({ color: '#0055ff' }),
			stroke: new Stroke({ color: '#ffffff', width: 2.5 }),
		}),
	});
}
</script>

<template>
	<div class="hm-outer">
		<!-- 30° decorative line behind the circle -->
		<div class="hm-diag-line" aria-hidden="true" />

		<!-- Circular map window -->
		<div class="hm-circle">
			<ol-map
				ref="mapRef"
				:load-tiles-while-animating="true"
				:load-tiles-while-interacting="true"
				style="width: 100%; height: 100%"
			>
				<ol-view
					ref="viewRef"
					:center="initialCenter"
					:zoom="initialZoom"
					max-zoom="19"
					:projection="PARTIMAP_PROJECTION"
				/>
				<ol-tile-layer>
					<ol-source-xyz
						url="https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
						attributions="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors &copy; <a href='https://carto.com/attributions'>CARTO</a>"
					/>
				</ol-tile-layer>
				<ol-vector-layer v-if="pinnedCoord" :z-index="500">
					<ol-source-vector>
						<ol-feature>
							<ol-geom-point :coordinates="pinnedCoord" />
							<ol-style :override-style-function="pinStyle" />
						</ol-feature>
					</ol-source-vector>
				</ol-vector-layer>
			</ol-map>
			<div class="hm-center-pin" aria-hidden="true">
				<div class="hm-center-pin-head" />
				<!-- <div class="hm-center-pin-tail" /> -->
			</div>
		</div>

		<!-- Zoom controls, outside the circle -->
		<button class="hm-btn hm-btn-in" aria-label="Zoom in" @click.stop="zoomIn">+</button>
		<button class="hm-btn hm-btn-out" aria-label="Zoom out" @click.stop="zoomOut">−</button>

		<!-- Select location button -->
		<button class="hm-btn hm-btn-select" aria-label="Select location" @click.stop="selectLocation">→</button>
	</div>
</template>

<style scoped>
/* Fills the full .hero-circle-wrap container */
.hm-outer {
	position: absolute;
	inset: 0;
	z-index: 1;
}

/* 80% circular window — same footprint as the old hero-blue-circle */
.hm-circle {
	position: absolute;
	width: 80%;
	height: 80%;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 50%;
	overflow: hidden;
}

/* Fixed center pin for selecting location while dragging map */
.hm-center-pin {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -100%);
	pointer-events: none;
	z-index: 1100;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.hm-center-pin-head {
	width: 18px;
	height: 18px;
	border-radius: 50% 50% 50% 0;
	transform: rotate(-45deg);
	background: #0055ff;
	box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.92);
	position: relative;
}

.hm-center-pin-head::after {
	content: '';
	position: absolute;
	left: 50%;
	top: 50%;
	width: 6px;
	height: 6px;
	border-radius: 50%;
	transform: translate(-50%, -50%) rotate(45deg);
	background: #fff;
}

.hm-center-pin-tail {
	width: 2px;
	height: 12px;
	margin-top: -2px;
	background: #0055ff;
	border-radius: 1px;
	opacity: 0.8;
}

/* Horizontal crosshair line */
.hm-axis-h {
	position: absolute;
	top: 50%;
	left: 0;
	right: 0;
	height: 1px;
	background: rgba(0, 85, 255, 0.45);
	pointer-events: none;
	z-index: 1000;
}

/* Vertical crosshair line */
.hm-axis-v {
	position: absolute;
	left: 50%;
	top: 0;
	bottom: 0;
	width: 1px;
	background: rgba(0, 85, 255, 0.45);
	pointer-events: none;
	z-index: 1000;
}

/* Shared button style */
.hm-btn {
	position: absolute;
	width: 34px;
	height: 34px;
	border-radius: 50%;
	border: 1.5px solid #0055ff;
	background: transparent;
	color: #0055ff;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	font-size: 1.2rem;
	font-weight: 400;
	line-height: 1;
	z-index: 2;
	padding: 0;
	transition:
		background 0.2s,
		color 0.2s;
}

.hm-btn:hover {
	background: #0055ff;
	color: #fff;
}

/* Diagonal line at 30°, sits behind the circle */
.hm-diag-line {
	position: absolute;
	top: 50%;
	left: 50%;
	width: 130%;
	height: 2px;
	background: #0055ff;
	transform: translate(-50%, -50%) rotate(120deg);
	pointer-events: none;
	z-index: 0;
}

/* + button: below container, above − */
.hm-btn-in {
	right: 2%;
	bottom: 0px;
}

/* − button: below container, below + */
.hm-btn-out {
	right: 2%;
	bottom: -42px;
}

/* → select location button: below container, left corner */
.hm-btn-select {
	left: 2%;
	bottom: -42px;
}

</style>
