import { Code } from '@/v1/core/common/code/code';
import { Exception } from '@/v1/core/common/exception/exception';
import { Optional } from '@/v1/core/common/type/common-types';
import {
  ClassValidationDetails,
  ClassValidator,
} from '@/v1/core/common/util/class-validator/class-validator';
import { v4 as uuidv4 } from 'uuid';

export abstract class Entity<TIdentifier extends string | number> {
  protected _id: Optional<TIdentifier>;

  public get id(): TIdentifier {
    if (typeof this._id === 'undefined') {
      throw Exception.new({
        code: Code.ENTITY_VALIDATION_ERROR,
        overrideMessage: `${this.constructor.name}: ID is empty.`,
      });
    }

    return this._id;
  }

  public generateId() {
    this._id = uuidv4();
  }

  public async validate(): Promise<void> {
    const details: Optional<ClassValidationDetails> =
      await ClassValidator.validate(this);
    if (details) {
      throw Exception.new({
        code: Code.ENTITY_VALIDATION_ERROR,
        data: details,
      });
    }
  }
}
