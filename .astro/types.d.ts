declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"TUTORIAL.md": {
	id: "TUTORIAL.md";
  slug: "tutorial";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"balsamiq-first-wireframe.md": {
	id: "balsamiq-first-wireframe.md";
  slug: "balsamiq-first-wireframe";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"balsamiq-wireframes.md": {
	id: "balsamiq-wireframes.md";
  slug: "balsamiq-wireframes";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"cors.md": {
	id: "cors.md";
  slug: "cors";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"finalq2.md": {
	id: "finalq2.md";
  slug: "finalq2";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"his1.md": {
	id: "his1.md";
  slug: "his1";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"http-verbs-definition.md": {
	id: "http-verbs-definition.md";
  slug: "http-verbs-definition";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"mdn-website-security.md": {
	id: "mdn-website-security.md";
  slug: "mdn-website-security";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"my.md": {
	id: "my.md";
  slug: "my";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"my101.md": {
	id: "my101.md";
  slug: "my101";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"my101a.md": {
	id: "my101a.md";
  slug: "my101a";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"my102.md": {
	id: "my102.md";
  slug: "my102";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"my2.md": {
	id: "my2.md";
  slug: "my2";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"my3.md": {
	id: "my3.md";
  slug: "my3";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"my4.md": {
	id: "my4.md";
  slug: "my4";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"my40.md": {
	id: "my40.md";
  slug: "my40";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"my5.md": {
	id: "my5.md";
  slug: "my5";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"my6.md": {
	id: "my6.md";
  slug: "my6";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"my7.md": {
	id: "my7.md";
  slug: "my7";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"my8.md": {
	id: "my8.md";
  slug: "my8";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"my88.md": {
	id: "my88.md";
  slug: "my88";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"network-attacks.md": {
	id: "network-attacks.md";
  slug: "network-attacks";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"ny0.md": {
	id: "ny0.md";
  slug: "ny0";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pocketbase-javascript-sdk.md": {
	id: "pocketbase-javascript-sdk.md";
  slug: "pocketbase-javascript-sdk";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"q1w01.md": {
	id: "q1w01.md";
  slug: "q1w01";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"q3-lab2.md": {
	id: "q3-lab2.md";
  slug: "q3-lab2";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"resume-creating.md": {
	id: "resume-creating.md";
  slug: "resume-creating";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"resume-technical.md": {
	id: "resume-technical.md";
  slug: "resume-technical";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"syllabus-q1.md": {
	id: "syllabus-q1.md";
  slug: "syllabus-q1";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"w3s-cybersecurity.md": {
	id: "w3s-cybersecurity.md";
  slug: "w3s-cybersecurity";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		"jupyter": {
};

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = never;
}
