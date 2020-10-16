import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { TableDataService } from '@service';
import { TableData } from '@model';
import { Response } from 'express';

@Controller('/data/:dataRoute')
export class TableDataController {
  constructor(private readonly tableDataService: TableDataService) {}

  @Get()
  async getTableData(@Param() params, @Res() res: Response) {
    try {
      const dataRoute: string = params.dataRoute;
      const tableData: TableData[] = await this.tableDataService.getTableData(dataRoute);
      
      res.status(HttpStatus.OK).json({
        'ok': true,
        'data': tableData,
        'error': null,
      });
    } catch (e) {
      res.status(HttpStatus.BAD_REQUEST).json({
        'ok': false,
        'data': null,
        'error': e,
      });

      console.error(`Get Table Data Error: ${e}`);
    }
  }

  @Post()
  async newTableData(@Param() params, @Body() body: TableData[], @Res() res: Response) {
    try {
      const dataRoute: string = params.dataRoute;
      const newTableData: TableData[] = await this.tableDataService.newTableData(dataRoute, body);

      res.status(HttpStatus.OK).json({
        'ok': true,
        'data': newTableData,
        'error': null,
      });
    } catch (e) {
      res.status(HttpStatus.BAD_REQUEST).json({
        'ok': false,
        'data': null,
        'error': e,
      });

      console.error(`New Table Data Error: ${e}`);
    }
  }

  @Put()
  async updateTableData(@Param() params, @Body() body: TableData[], @Res() res: Response) {
    try {
      const dataRoute: string = params.dataRoute;
      const updatedTableData: TableData[] = await this.tableDataService.updateTableData(dataRoute, body);

      res.status(HttpStatus.OK).json({
        'ok': true,
        'data': updatedTableData,
        'error': null,
      });
    } catch (e) {
      res.status(HttpStatus.BAD_REQUEST).json({
        'ok': false,
        'data': null,
        'error': e,
      });

      console.error(`Update Table Data Error: ${e}`);
    }
  }

  @Delete()
  async deleteArtist(@Param() params, @Body() body: TableData[], @Res() res: Response) {
    try {
      const dataRoute: string = params.dataRoute;
      const deletedRowsCount: number[] = await this.tableDataService.deleteTableData(dataRoute, body);
      
      res.status(HttpStatus.OK).json({
        'ok': true,
        'data': `Affected rows count: ${deletedRowsCount.reduce((acc: number = 0, cur: number) => acc + cur)}`,
        'error': null,
      });
    } catch (e) {
      res.status(HttpStatus.BAD_REQUEST).json({
        'ok': false,
        'data': null,
        'error': e,
      });

      console.error(`Delete Table Data Error: ${e}`);
    }
  }
}

export default TableDataController;