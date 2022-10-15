import { Module } from '@nestjs/common';
import { DiscordController } from './discord.controller';
import { DiscordService } from './discord.service';

@Module({
  imports: [],
  controllers: [DiscordController],
  providers: [DiscordService],
})
export class DiscordModule {}
