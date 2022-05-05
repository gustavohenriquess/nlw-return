import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

describe("Submit feedback", () => {
  it("should be able to submit feedback", async () => {
    const submitFeedback = new SubmitFeedbackUseCase(
      { create: createFeedbackSpy },
      { sendMail: sendMailSpy }
    );

    expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "Exempla comment",
        screenshot: "data:image/png;base64 :Exempla screenshot",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it("should not be able to submit feedback without type", async () => {
    const submitFeedback = new SubmitFeedbackUseCase(
      { create: async () => {} },
      { sendMail: async () => {} }
    );

    expect(
      submitFeedback.execute({
        type: "",
        comment: "Exempla comment",
        screenshot: "data:image/png;base64 :Exempla screenshot",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit feedback without comment", async () => {
    const submitFeedback = new SubmitFeedbackUseCase(
      { create: async () => {} },
      { sendMail: async () => {} }
    );

    expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "",
        screenshot: "data:image/png;base64 :Exempla screenshot",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit feedback with an invalid screenshot", async () => {
    const submitFeedback = new SubmitFeedbackUseCase(
      { create: async () => {} },
      { sendMail: async () => {} }
    );

    expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "INVALID_SCREENSHOT",
        screenshot: "INVALID_SCREENSHOT",
      })
    ).rejects.toThrow();
  });
});
