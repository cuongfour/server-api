import pool from '../config/db';

export interface Resource {
  id?: number;
  name: string;
  description: string;
}

export const createResource = async (resource: Resource) => {
  const result = await pool.query(
    'INSERT INTO resources (name, description) VALUES ($1, $2) RETURNING *',
    [resource.name, resource.description]
  );
  return result.rows[0];
};

export const getAllResources = async () => {
  const result = await pool.query('SELECT * FROM resources');
  return result.rows;
};

export const getResourceById = async (id: number) => {
  const result = await pool.query('SELECT * FROM resources WHERE id = $1', [id]);
  return result.rows[0];
};

export const updateResource = async (id: number, resource: Partial<Resource>) => {
  const result = await pool.query(
    'UPDATE resources SET name = $1, description = $2 WHERE id = $3 RETURNING *',
    [resource.name, resource.description, id]
  );
  return result.rows[0];
};

export const deleteResource = async (id: number) => {
  const result = await pool.query('DELETE FROM resources WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};
