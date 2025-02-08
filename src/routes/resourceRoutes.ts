import { Router } from 'express';
import * as resourceController from '../controllers/resourceController';

const router = Router();

router.post('/resources', resourceController.createResource);
router.get('/resources', resourceController.getAllResources);
router.get('/resources/:id', resourceController.getResourceById);
router.put('/resources/:id', resourceController.updateResource);
router.delete('/resources/:id', resourceController.deleteResource);

export default router;
