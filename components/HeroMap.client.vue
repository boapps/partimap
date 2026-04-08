<script setup lang="ts">
import L from 'leaflet';

const mapEl = ref<HTMLElement | null>(null);
let map: L.Map | null = null;

onMounted(() => {
	if (!mapEl.value) return;

	map = L.map(mapEl.value, {
		zoomControl: false,
		attributionControl: true,
		dragging: true,
		scrollWheelZoom: false,
		doubleClickZoom: false,
		keyboard: false,
	}).setView([47.5, 19.04], 11);

	L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
		attribution:
			'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions" target="_blank">CARTO</a>',
		subdomains: 'abcd',
		maxZoom: 19,
	}).addTo(map);
});

onUnmounted(() => {
	map?.remove();
	map = null;
});

function zoomIn() {
	map?.zoomIn();
}

function zoomOut() {
	map?.zoomOut();
}
</script>

<template>
	<div class="hm-outer">
		<!-- 30° decorative line behind the circle -->
		<div class="hm-diag-line" aria-hidden="true" />

		<!-- Circular map window -->
		<div class="hm-circle">
			<div ref="mapEl" class="hm-el" />
			<!-- Crosshair axis lines inside the map -->
			<div class="hm-axis-h" aria-hidden="true" />
			<div class="hm-axis-v" aria-hidden="true" />
		</div>

		<!-- Zoom controls, outside the circle -->
		<button class="hm-btn hm-btn-in" aria-label="Zoom in" @click.stop="zoomIn">+</button>
		<button class="hm-btn hm-btn-out" aria-label="Zoom out" @click.stop="zoomOut">−</button>
	</div>
</template>

<!-- Leaflet base styles: must be non-scoped so they reach the map tiles -->
<style>
@import 'leaflet/dist/leaflet.css';

/* Scale down leaflet attribution to avoid visual clutter */
.leaflet-control-attribution {
	font-size: 9px !important;
	opacity: 0.6;
}
</style>

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

.hm-el {
	width: 100%;
	height: 100%;
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

/* + button: bottom right */
.hm-btn-in {
	right: 5%;
	bottom: calc(2% + 42px);
}

/* − button: bottom right, below + with gap */
.hm-btn-out {
	right: 5%;
	bottom: 2%;
}
</style>
