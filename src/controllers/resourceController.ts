import { Request, Response } from 'express';
import * as resourceModel from '../models/resourceModel';

export const createResource = async (req: Request, res: Response) => {
  try {
    const resource = await resourceModel.createResource(req.body);
    res.status(201).json(resource);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create resource' });
  }
};

export const getAllResources = async (_req: Request, res: Response) => {
  try {
    const resources = await resourceModel.getAllResources();
    res.status(200).json(resources);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch resources' });
  }
};

export const getResourceById = async (req: Request, res: Response) => {
  try {
    const resource = await resourceModel.getResourceById(Number(req.params.id));
    resource ? res.json(resource) : res.status(404).json({ error: 'Resource not found' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch resource' });
  }
};

export const updateResource = async (req: Request, res: Response) => {
  try {
    const updatedResource = await resourceModel.updateResource(Number(req.params.id), req.body);
    updatedResource ? res.json(updatedResource) : res.status(404).json({ error: 'Resource not found' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update resource' });
  }
};

export const deleteResource = async (req: Request, res: Response) => {
  try {
    const deletedResource = await resourceModel.deleteResource(Number(req.params.id));
    deletedResource ? res.json(deletedResource) : res.status(404).json({ error: 'Resource not found' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete resource' });
  }
};
