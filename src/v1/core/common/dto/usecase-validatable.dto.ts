import { Code } from '@/v1/core/common/code/code';
import { Exception } from '@/v1/core/common/exception/exception';
import { Optional } from '@/v1/core/common/type/common-types';
import {
  ClassValidationDetails,
  ClassValidator,
} from '@/v1/core/common/util/class-validator/class-validator';

export class UseCaseValidatableDTO {
  public async validate(): Promise<void> {
    const details: Optional<ClassValidationDetails> =
      await ClassValidator.validate(this);
    if (details) {
      throw Exception.new({
        code: Code.USE_CASE_DTO_VALIDATION_ERROR,
        data: details,
      });
    }
  }
}
