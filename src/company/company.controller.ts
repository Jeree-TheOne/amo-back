import { Controller, Post, Body } from '@nestjs/common';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  async addCompany(@Body() name) {
    const {
      data: {
        _embedded: { companies },
      },
    } = await this.companyService.addCompany(name);
    return companies[0].id;
  }
}
