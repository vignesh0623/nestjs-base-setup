import { Controller, Get, Query, Post, Body} from '@nestjs/common';
import { TestService } from './test.service';
import { TestDto } from './dto/test.dto/test.dto';

    @Controller('test')
    export class TestController {
        constructor(private readonly testService: TestService) {}

        @Post('test-post')
        async testPost(@Body() testDto: TestDto) {
            return this.testService.testPost(testDto);
        }

        @Get('test-get')
        async testGet(@Query('id') id: string) {
            return this.testService.testGet(id);
        }
    }
