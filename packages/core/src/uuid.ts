export class Uuid {
  public constructor(public readonly value: Buffer) {
    if (value.length !== 16) {
      throw new Error("UUID must be 16 bytes");
    }
  }

  public toString(): string {
    return "some-string";
  }
}
