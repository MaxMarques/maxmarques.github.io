declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

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
		"education": {
"bachelor.md": {
	id: "bachelor.md";
  slug: "bachelor";
  body: string;
  collection: "education";
  data: InferEntrySchema<"education">
} & { render(): Render[".md"] };
"highSchool.md": {
	id: "highSchool.md";
  slug: "highschool";
  body: string;
  collection: "education";
  data: InferEntrySchema<"education">
} & { render(): Render[".md"] };
"master.md": {
	id: "master.md";
  slug: "master";
  body: string;
  collection: "education";
  data: InferEntrySchema<"education">
} & { render(): Render[".md"] };
"nyc.md": {
	id: "nyc.md";
  slug: "nyc";
  body: string;
  collection: "education";
  data: InferEntrySchema<"education">
} & { render(): Render[".md"] };
};
"legal": Record<string, {
  id: string;
  slug: string;
  body: string;
  collection: "legal";
  data: InferEntrySchema<"legal">;
  render(): Render[".md"];
}>;
"projects": {
"bachelorprojects/arcade/index.md": {
	id: "bachelorprojects/arcade/index.md";
  slug: "bachelorprojects/arcade";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"bachelorprojects/asmminlibc/index.md": {
	id: "bachelorprojects/asmminlibc/index.md";
  slug: "bachelorprojects/asmminlibc";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"bachelorprojects/indiestudio/index.md": {
	id: "bachelorprojects/indiestudio/index.md";
  slug: "bachelorprojects/indiestudio";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"bachelorprojects/malloc/index.md": {
	id: "bachelorprojects/malloc/index.md";
  slug: "bachelorprojects/malloc";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"bachelorprojects/myftp/index.md": {
	id: "bachelorprojects/myftp/index.md";
  slug: "bachelorprojects/myftp";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"bachelorprojects/myteams/index.md": {
	id: "bachelorprojects/myteams/index.md";
  slug: "bachelorprojects/myteams";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"bachelorprojects/popeye/index.md": {
	id: "bachelorprojects/popeye/index.md";
  slug: "bachelorprojects/popeye";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"bachelorprojects/pushswapchecker/index.md": {
	id: "bachelorprojects/pushswapchecker/index.md";
  slug: "bachelorprojects/pushswapchecker";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"bachelorprojects/tekspice/index.md": {
	id: "bachelorprojects/tekspice/index.md";
  slug: "bachelorprojects/tekspice";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"bostondynamicsspotdetection/index.md": {
	id: "bostondynamicsspotdetection/index.md";
  slug: "bostondynamicsspotdetection";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"lycee/index.md": {
	id: "lycee/index.md";
  slug: "lycee";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"masterprojects/area/index.md": {
	id: "masterprojects/area/index.md";
  slug: "masterprojects/area";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"masterprojects/dashboard/index.md": {
	id: "masterprojects/dashboard/index.md";
  slug: "masterprojects/dashboard";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"masterprojects/funEvalExpr/index.md": {
	id: "masterprojects/funEvalExpr/index.md";
  slug: "masterprojects/funevalexpr";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"masterprojects/redditech/index.md": {
	id: "masterprojects/redditech/index.md";
  slug: "masterprojects/redditech";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"pointcloudvisualization/index.md": {
	id: "pointcloudvisualization/index.md";
  slug: "pointcloudvisualization";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"traveltrolly/index.md": {
	id: "traveltrolly/index.md";
  slug: "traveltrolly";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"vakary/index.md": {
	id: "vakary/index.md";
  slug: "vakary";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
};
"work": {
"alerion.md": {
	id: "alerion.md";
  slug: "alerion";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".md"] };
"dcg.md": {
	id: "dcg.md";
  slug: "dcg";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".md"] };
"immopad.md": {
	id: "immopad.md";
  slug: "immopad";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".md"] };
"mydomus.md": {
	id: "mydomus.md";
  slug: "mydomus";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".md"] };
"pandalab.md": {
	id: "pandalab.md";
  slug: "pandalab";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".md"] };
"pwc.md": {
	id: "pwc.md";
  slug: "pwc";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".md"] };
"taker.md": {
	id: "taker.md";
  slug: "taker";
  body: string;
  collection: "work";
  data: InferEntrySchema<"work">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../src/content/config.js");
}
