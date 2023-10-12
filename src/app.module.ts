import { Module } from '@nestjs/common';
import { ContactModule } from './contact/contact.module';
import { CompanyModule } from './company/company.module';
import { LeadModule } from './lead/lead.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), ContactModule, CompanyModule, LeadModule],
})
export class AppModule {}
