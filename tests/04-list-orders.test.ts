import request from "supertest";
import app from "../src/app";
import connection from "../src/models/connection";
import recreateDatabase from "./recreateDatabase";

require('mysql2/node_modules/iconv-lite').encodingExists('foo');

describe("4 - Crie um endpoint para listar todos os pedidos", () => {
  beforeAll(async () => {
    await recreateDatabase(connection);
  });
  afterAll(() => {
    connection.end();
  })

  it('Será validado que é possível listar todos os pedidos com sucesso', async () => {
    const result = await request(app).get("/orders")

    expect(result.statusCode).toBe(200);
    expect(result.body.length).toBe(3);
    expect(result.body).toEqual(
      expect.arrayContaining(
        [expect.objectContaining({ id: 1, userId: 1, productsIds: expect.arrayContaining([2]) }),]
      )
    );
    expect(result.body).toEqual(
      expect.arrayContaining(
        [expect.objectContaining({ id: 2, userId: 3, productsIds: expect.arrayContaining([3, 4]) }),]
      )
    );
    expect(result.body).toEqual(
      expect.arrayContaining(
        [expect.objectContaining({ id: 3, userId: 2, productsIds: expect.arrayContaining([5]) })]
      )
    );
  });
});
