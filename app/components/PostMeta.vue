<template>
	<div class="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium uppercase tracking-[0.12em] text-neutral-400">
		<span :class="featured ? 'bg-neutral-950 text-white' : 'bg-neutral-100 text-neutral-700'" class="rounded-full px-2.5 py-1 normal-case tracking-normal">{{ post.topic }}</span>
		<time :datetime="post.date">{{ formatDate(post.date) }}</time>
		<span aria-hidden="true">·</span>
		<span>{{ readMinutes(post.body) }} min read</span>
	</div>
</template>

<script setup lang="ts">
import { formatDate, readMinutes } from "~/data/blog";

defineProps<{ post: { date: string; topic: string; body: unknown }; featured?: boolean }>();
</script>
