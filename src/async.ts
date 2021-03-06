import { StoreAsync as AbstractStore } from "@konceiver/kv-file";

import { StoreSync } from "./sync";

export class StoreAsync<K, T> extends AbstractStore<K, T> {
	public static async new<K, T>(uri: string): Promise<StoreAsync<K, T>> {
		// @ts-ignore
		return new StoreAsync<K, T>(StoreSync.new<K, T>(uri));
	}
}
