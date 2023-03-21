import React from "react";
import { Formik, useFormik } from "formik";

function validate(values) {
	const errors = {};

	if (!values.questionCategory) {
		errors.questionCategory = "Please select a category";
	}

	if (!values.questionNumber) {
		errors.questionNumber = "Please select a number of questions";
	}

	if (!values.questionDifficulty) {
		errors.questionDifficulty = "Please select a difficulty";
	}

	return errors;
}

function StartScreen({ handleSubmit, handleFormChange }) {
	const formik = useFormik({
		initialValues: {
			questionCategory: "",
			questionNumber: "",
			questionDifficulty: "",
		},
		validate,
		onSubmit: (values) => {
			console.log(values);
			handleSubmit();
		},
	});
	return (
		<main className="form-wrapper">
			<form id="startGameForm" onSubmit={handleSubmit}>
				<fieldset>
					<label htmlFor="questionCategory">Select Category</label>
					<select
						name="questionCategory"
						id="questionCategory"
						onChange={(e) => {
							formik.handleChange(e);
							handleFormChange(e);
						}}
						onBlur={formik.handleBlur}
						value={formik.values.questionCategory}
						required
					>
						<option value="">Choose...</option>
						<option value="9">General Knowledge</option>
						<option value="10">Entertainment: Books</option>
						<option value="11">Entertainment: Film</option>
						<option value="12">Entertainment: Music</option>
						<option value="13">Entertainment: Musicals &amp; Theatres</option>
						<option value="14">Entertainment: Television</option>
						<option value="15">Entertainment: Video Games</option>
						<option value="16">Entertainment: Board Games</option>
						<option value="17">Science &amp; Nature</option>
						<option value="18">Science: Computers</option>
						<option value="19">Science: Mathematics</option>
						<option value="20">Mythology</option>
						<option value="21">Sports</option>
						<option value="22">Geography</option>
						<option value="23">History</option>
						<option value="24">Politics</option>
						<option value="25">Art</option>
						<option value="26">Celebrities</option>
						<option value="27">Animals</option>
						<option value="28">Vehicles</option>
						<option value="29">Entertainment: Comics</option>
						<option value="30">Science: Gadgets</option>
						<option value="31">
							Entertainment: Japanese Anime &amp; Manga
						</option>
						<option value="32">Entertainment: Cartoon &amp; Animations</option>
					</select>
					{formik.touched.questionCategory && formik.errors.questionCategory ? (
						<p className="error-msg">{formik.errors.questionCategory}</p>
					) : null}
				</fieldset>
				<fieldset>
					<label htmlFor="questionNumber">Select number of questions</label>
					<select
						name="questionNumber"
						id="questionNumber"
						onChange={(e) => {
							formik.handleChange(e);
							handleFormChange(e);
						}}
						onBlur={formik.handleBlur}
						value={formik.values.questionNumber}
						required
					>
						<option value="">Choose...</option>
						<option value="5">5</option>
						<option value="10">10</option>
						<option value="15">15</option>
						<option value="20">20</option>
						<option value="25">25</option>
						<option value="30">30</option>
					</select>
					{formik.touched.questionNumber && formik.errors.questionNumber ? (
						<p className="error-msg">{formik.errors.questionNumber}</p>
					) : null}
				</fieldset>
				<fieldset>
					<label htmlFor="questionDifficulty">Select difficulty</label>
					<select
						name="questionDifficulty"
						id="questionDifficulty"
						onChange={(e) => {
							formik.handleChange(e);
							handleFormChange(e);
						}}
						onBlur={formik.handleBlur}
						value={formik.values.questionDifficulty}
						required
					>
						<option value="">Choose...</option>
						<option value="easy">Easy</option>
						<option value="medium">Medium</option>
						<option value="hard">Hard</option>
					</select>
					{formik.touched.questionDifficulty &&
					formik.errors.questionDifficulty ? (
						<p className="error-msg">{formik.errors.questionDifficulty}</p>
					) : null}
				</fieldset>
				<button className="btn btn-big" type="submit">
					Start quiz
				</button>
			</form>
		</main>
	);
}

export default StartScreen;
