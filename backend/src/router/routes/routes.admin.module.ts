import { Module } from '@nestjs/common';
import { ApiKeyModule } from 'src/common/api-key/api-key.module';
import { ApiKeyAdminController } from 'src/common/api-key/controllers/api-key.admin.controller';
import { AuthModule } from 'src/common/auth/auth.module';
import { PaginationModule } from 'src/common/pagination/pagination.module';
import { EmailModule } from 'src/modules/email/email.module';
import { RoleAdminController } from 'src/modules/role/controllers/role.admin.controller';
import { RoleModule } from 'src/modules/role/role.module';
import { SettingAdminController } from 'src/modules/setting/controllers/setting.admin.controller';
import { SettingModule } from 'src/modules/setting/setting.module';
import { UserAdminController } from 'src/modules/user/controllers/user.admin.controller';
import { UserModule } from 'src/modules/user/user.module';
import { TemplateAdminController } from '../../modules/template/controllers/template.admin.controller';
import { TemplateModule } from '../../modules/template/template.module';
import { TemplateTagAdminController } from '../../modules/template/controllers/template-tag.admin.controller';

@Module({
    controllers: [
        ApiKeyAdminController,
        SettingAdminController,
        RoleAdminController,
        UserAdminController,
        TemplateAdminController,
        TemplateTagAdminController,
    ],
    providers: [],
    exports: [],
    imports: [
        ApiKeyModule,
        PaginationModule,
        SettingModule,
        RoleModule,
        UserModule,
        AuthModule,
        EmailModule,
        TemplateModule,
    ],
})
export class RoutesAdminModule {}
