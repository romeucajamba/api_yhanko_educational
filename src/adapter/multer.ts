import multer from 'multer';
import { FastifyInstance } from 'fastify';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); 
    },
});

const upload = multer({ storage });

export const uploadMiddleware = (req: any, res: any, next: any) => {
    upload.fields([
        { name: 'profilePicture', maxCount: 1 },
        { name: 'coverPicture', maxCount: 1 }
    ])(req, res, next);
};
