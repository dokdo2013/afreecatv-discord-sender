import { Injectable } from '@nestjs/common';
import { Webhook, MessageBuilder } from 'webhook-discord';
import { WebhookDto } from './webhook.dto';

@Injectable()
export class DiscordService {
  async sendMessage(webhook: WebhookDto) {
    const Hook = new Webhook(webhook.webhookUrl);

    let color = '#00ff00';
    switch (webhook.status) {
      case 'success':
        color = '#00ff00';
        break;
      case 'warning':
        color = '#ffff00';
        break;
      case 'error':
        color = '#ff0000';
        break;
      case 'info':
        color = '#0000ff';
        break;
    }

    const message = new MessageBuilder();

    if (webhook.sender) {
      message.setName(webhook.sender.name);
      message.setAvatar(webhook.sender.icon_url);
    }
    if (webhook.message) {
      message.setTitle(webhook.message.title);
      message.setDescription(webhook.message.description);
      message.setImage(webhook.message.image);
    }
    if (webhook.author) {
      message.setAuthor(
        webhook.author.name,
        webhook.author.icon_url,
        webhook.author.url,
      );
    }
    if (webhook.text) {
      message.setText(webhook.text);
    }
    message.setColor(color);

    Hook.send(message);
  }
}
