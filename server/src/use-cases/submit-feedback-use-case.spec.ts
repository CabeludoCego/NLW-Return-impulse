import { create } from "domain";
import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy },
)

describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {
        await expect(submitFeedback.execute({
          type: 'BUG',
          comment: 'example coment',
          screenshot: 'data:image/png;base64,iVBORw0KGgoAAA',
        })).resolves.not.toThrow()   // Resolve e não dispara erros

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();

    });

    it('should not be able to submit a feedback without type', async () => {
        await expect(submitFeedback.execute({
          type: '',
          comment: 'example coment',
          screenshot: 'data:image/png;base64,iVBORw0KGgoAAA',
        })).rejects.toThrow()   // Resolve e não dispara erros
    });

    it('should not be able to submit a feedback without comment', async () => {
        await expect(submitFeedback.execute({
          type: 'BUG',
          comment: '',
          screenshot: 'data:image/png;base64,iVBORw0KGgoAAA',
        })).rejects.toThrow()   // Resolve e não dispara erros
    });

    it('should not be able to submit a feedback with invalid screenshot', async () => {
        await expect(submitFeedback.execute({
          type: 'BUG',
          comment: 'comment',
          screenshot: '123',
        })).rejects.toThrow()   // Resolve e não dispara erros
    });
});