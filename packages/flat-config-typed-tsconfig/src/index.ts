import { Uuid } from '@company/core'

export class Service {
  public createPosition(
    id: Uuid,
  ): void {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const a = `someUrl/${id}`;
                      //  ^ specifically not working when specifying package: @company/lib
  }
}