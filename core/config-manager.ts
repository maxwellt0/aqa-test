import 'dotenv/config';

class ConfigManager {
  get apiBaseUrl(): string {
    return this.getRequiredEnvVar('API_BASE_URL');
  }

  get uiBaseUrl(): string {
    return this.getRequiredEnvVar('UI_BASE_URL');
  }

  get uiUsername(): string {
    return this.getRequiredEnvVar('UI_USERNAME');
  }

  get uiPassword(): string {
    return this.getRequiredEnvVar('UI_PASSWORD');
  }

  private getRequiredEnvVar(varName: string): string {
    const value = process.env[varName];
    if (!value) {
      throw new Error(`Missing required environment variable: ${varName}`);
    }
    return value;
  }
}

export const configManager = new ConfigManager();