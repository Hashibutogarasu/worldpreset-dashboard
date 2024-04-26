//https://qiita.com/NPG418/items/44eb13016c13a4708254

type JsonPrimitive = string | number | boolean | null;

type JsonArray = JsonPrimitive[] | JsonObject[];

type JsonObject = {
    [key: string]: JsonPrimitive | JsonObject | JsonArray;
};

type Json = JsonPrimitive | JsonArray | JsonObject;

// ユーティリティー型
type Replace<T, Replacer extends keyof T, Replaced> = MappedType<
    Pick<T, Exclude<keyof T, Replacer>> & {
        [Key in Replacer]: Replaced;
    }
>;
type MappedType<T> = { [Key in keyof T]: T[Key] };


type KeysMatching<T, V> = {
    [Key in keyof T]-?: T[Key] extends V ? Key : never;
}[keyof T];

type ChildrenTypes<T> = {
    [Key in keyof T]-?: T[Key];
}[keyof T];

type RemoveUndefined<T> = Omit<T, KeysMatching<T, undefined>>

// JSON utilities
type asJsonObject<T> = Replace<
    RemoveUndefined<T>,
    KeysMatching<
        RemoveUndefined<T>,
        Exclude<ChildrenTypes<RemoveUndefined<T>>, Json>
    >,
    string
>;

type asJsonArray<T> = T extends (infer U)[] ? asJson<U>[] : asJsonObject<T>;

export type asJson<T> = T extends JsonPrimitive ? T : asJsonArray<T>;