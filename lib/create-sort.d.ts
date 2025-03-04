export default function createSort<T = string>(configuration?: {
	unitlessMqAlwaysFirst?: boolean | undefined;
}): (a: T, b: T) => number;
