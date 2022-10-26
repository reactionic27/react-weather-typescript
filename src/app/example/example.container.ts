import { container } from 'inversify-props';
import { ExampleAlertService, IExampleAlertService } from './shared';

const ExampleContainer = () => {
  container.addSingleton<IExampleAlertService>(ExampleAlertService);
};

export default ExampleContainer;
