import { JoinrsoModule } from './joinrso.module';

describe('JoinrsoModule', () => {
    let joinRSOModule: JoinrsoModule;

    beforeEach(() => {
        joinRSOModule = new JoinrsoModule();
    });

    it('should create an instance', () => {
        expect(joinRSOModule).toBeTruthy();
    });
});
