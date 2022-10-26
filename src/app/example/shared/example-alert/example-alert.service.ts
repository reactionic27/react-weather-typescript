import { inject } from 'inversify-hooks';
import * as shared from '~/app/shared';
import { IExampleAlertService } from './iexample-alert.service';

export class ExampleAlertService implements IExampleAlertService {
  @inject() private logService: shared.ILogService;

  public get(): void {
    this.logService.get();
  }
}
