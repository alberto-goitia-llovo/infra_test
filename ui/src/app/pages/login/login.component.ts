import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonModule, PasswordModule, CheckboxModule, FormsModule],
  template: `
    <div
      class="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden"
    >
      <div class="flex flex-column align-items-center justify-content-center">
        <img
          src="assets/layout/images/logo-dark.svg"
          alt="Sakai logo"
          class="mb-5 w-6rem flex-shrink-0"
        />
        <div
          style="border-radius:56px; padding:0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%);"
        >
          <div
            class="w-full surface-card py-8 px-5 sm:px-8"
            style="border-radius:53px"
          >
            <div class="text-center mb-5">
              <img
                src="assets/demo/images/login/avatar.png"
                alt="Image"
                height="50"
                class="mb-3"
              />
              <div class="text-900 text-3xl font-medium mb-3">
                Welcome, Isabel!
              </div>
              <span class="text-600 font-medium">Sign in to continue</span>
            </div>

            <div>
              <label
                for="email1"
                class="block text-900 text-xl font-medium mb-2"
                >Email</label
              >
              <input
                id="email1"
                type="text"
                placeholder="Email address"
                pInputText
                class="w-full md:w-30rem mb-5"
                style="padding:1rem"
              />

              <label
                for="password1"
                class="block text-900 font-medium text-xl mb-2"
                >Password</label
              >
              <p-password
                id="password1"
                placeholder="Password"
                [toggleMask]="true"
                styleClass="mb-5"
                inputStyleClass="w-full p-3 md:w-30rem"
                [(ngModel)]="password"
              ></p-password>

              <div
                class="flex align-items-center justify-content-between mb-5 gap-5"
              >
                <div class="flex align-items-center">
                  <p-checkbox
                    id="rememberme1"
                    [binary]="true"
                    styleClass="mr-2"
                  ></p-checkbox>
                  <label for="rememberme1">Remember me</label>
                </div>
                <a
                  class="font-medium no-underline ml-2 text-right cursor-pointer"
                  style="color: var(--primary-color)"
                  >Forgot password?</a
                >
              </div>
              <button
                pButton
                pRipple
                label="Sign In"
                class="w-full p-3 text-xl"
                (click)="login()"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  password!: string;
  email!: string;
  constructor(private readonly authService: AuthService) {}
  login(): void {
    this.authService.login(this.email, this.password).subscribe();
  }
}
