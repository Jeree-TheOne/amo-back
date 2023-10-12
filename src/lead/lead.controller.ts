import { Controller, Post, Body } from '@nestjs/common';
import { LeadService } from './lead.service';

@Controller('lead')
export class LeadController {
  constructor(private readonly leadService: LeadService) {}

  @Post()
  async addLead(@Body() name: string) {
    const {
      data: {
        _embedded: { leads },
      },
    } = await this.leadService.addLead(name);
    return leads[0].id;
  }
}
