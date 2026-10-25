import { get, writable } from "svelte/store";

export type Theme = "rajevlight" | "rajevdark";

const storageKey = "website-theme";
const themeStore = writable<Theme>("rajevdark");
let preference: Theme | undefined;

const readPreference = (): Theme | undefined => {
	try {
		const stored = localStorage.getItem(storageKey);
		return stored === "rajevlight" || stored === "rajevdark"
			? stored
			: undefined;
	} catch {
		return undefined;
	}
};

// Called once by ThemeToggle on mount; never mutates state during SSR.
export const initializeTheme = () => {
	const media = window.matchMedia("(prefers-color-scheme: dark)");
	preference = readPreference();
	themeStore.set(preference ?? (media.matches ? "rajevdark" : "rajevlight"));

	const unsubscribe = themeStore.subscribe((value) => {
		document.documentElement.dataset.theme = value;
		document.documentElement.style.colorScheme =
			value === "rajevdark" ? "dark" : "light";
	});
	const onSystemChange = (event: MediaQueryListEvent) => {
		if (!preference) {
			themeStore.set(event.matches ? "rajevdark" : "rajevlight");
		}
	};
	media.addEventListener("change", onSystemChange);

	return () => {
		unsubscribe();
		media.removeEventListener("change", onSystemChange);
	};
};

export const theme = {
	subscribe: themeStore.subscribe,
};

export const setTheme = (value: Theme) => {
	if (typeof window === "undefined") return;
	preference = value;
	themeStore.set(value);
	try {
		localStorage.setItem(storageKey, value);
	} catch {
		// Keep the selected theme for this session when storage is unavailable.
	}
};

export const toggleTheme = () => {
	const next = get(themeStore) === "rajevdark" ? "rajevlight" : "rajevdark";
	setTheme(next);
};
