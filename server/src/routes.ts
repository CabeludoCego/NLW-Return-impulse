import express from 'express';
import nodemailer from 'nodemailer';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { prisma } from './prisma';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';

export const routes = express.Router()

routes.post('/feedbacks', async(req,res) => {
    const { type, comment, screenshot } = req.body

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const nodemailerAdapter = new NodemailerMailAdapter()
    
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbacksRepository,
        nodemailerAdapter
    )
    
    await submitFeedbackUseCase.execute({
        type, 
        comment, 
        screenshot,
    });

    /* 
    const feedback = await prisma.feedback.create({
        data: {
            type,
            comment,
            screenshot,
            // screenshot: screenshot // E se for "a : a", pode-se escrever só a
            // screenshot: req.body.screenshot, // simplificamos com const
        }
    })
     */

    return res.status(201).send();
    //json({ data: feedback });
})