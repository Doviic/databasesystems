import { UniversitySignupModule } from './university-signup.module';

describe('UniversitySignupModule', () => {
  let universitysignupModule: UniversitySignupModule;

  beforeEach(() => {
    universitysignupModule = new UniversitySignupModule();
  });

  it('should create an instance', () => {
    expect(universitysignupModule).toBeTruthy();
  });
});
