import { prisma } from "../../prisma";
import { FeedbacksRepository, FeedbackCreateData } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
    async create ( {type, comment, screenshot}: FeedbackCreateData ) {
        await prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot,
                // screenshot: screenshot // E se for "a : a", pode-se escrever só a
                // screenshot: req.body.screenshot, // simplificamos com const
            }
        });
    }
}