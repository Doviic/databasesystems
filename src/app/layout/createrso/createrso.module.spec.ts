import { CreatersoModule } from './createrso.module';

describe('CreatersoModule', () => {
    let createRSOModule: CreatersoModule;

    beforeEach(() => {
        createRSOModule = new CreatersoModule();
    });

    it('should create an instance', () => {
        expect(createRSOModule).toBeTruthy();
    });
});
