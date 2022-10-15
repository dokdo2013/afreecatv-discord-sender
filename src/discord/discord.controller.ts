import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { DiscordService } from './discord.service';
import { WebhookDto } from './webhook.dto';

@Controller('discord')
export class DiscordController {
  constructor(private readonly discordService: DiscordService) {}

  @MessagePattern('sendDiscord')
  async sendDiscord(webhook: WebhookDto) {
    await this.discordService.sendMessage(webhook);
  }
}
