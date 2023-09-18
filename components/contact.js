import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';

// COMPONENTS
import { KontaktItems } from './items';

// STYLES
import { StyledFormWrapper, StyledFormContainer, StyledForm, StyledInput, StyledTextarea, StyledMapWrapper } from './Styles';
import { StyledButton, StyledText } from './StylesGeneral';
import { StyledIframe } from './Layout/Styles';

const initialState = {
	state: 'IDLE',
	name: 'Imię i nazwisko (wymagane)',
	email: 'Email',
	phone: 'Telefon (wymagane)',
	message: 'Wiadomość (wymagane)',
};

const Contact = ({ userId, serviceId, tamplateId, contaktitems, map }) => {
	const [formData, setFormData] = useState(initialState);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const form = useRef();

	const onSubmit = handleSubmit(() => {
		emailjs.sendForm(serviceId, tamplateId, form.current, userId).then(
			() => {
				setFormData({ ...formData, state: 'SUCCESS' });
				reset({
					name: formData?.name,
					email: formData?.email,
					tel: formData?.phone,
					message: formData?.message,
				});
			},
			() => {
				setFormData({ ...formData, state: 'ERROR' });
				reset({
					name: formData?.name,
					email: formData?.email,
					tel: formData?.phone,
					message: formData?.message,
				});
			},
		);
	});

	return (
		<>
			<StyledFormContainer>
				<StyledFormWrapper>
					<StyledText formStyle black>
						Formularz kontaktowy
					</StyledText>

					<StyledForm ref={form} onSubmit={handleSubmit(onSubmit)}>
						<StyledInput
							type="text"
							placeholder={formData?.name}
							name="name"
							aria-invalid={errors?.name ? 'true' : 'false'}
							{...register('name', {
								required: true,
								maxLength: 30,
							})}
						/>
						{errors?.name && <p>Imię i nazwisko jest wymagane</p>}

						<StyledInput
							type="text"
							aria-invalid={errors?.email ? 'true' : 'false'}
							placeholder={formData?.email}
							name="email"
							{...register('email', { pattern: /^\S+@\S+$/i })}
						/>
						{errors?.email && <p>Email jest wymagany.</p>}

						<StyledInput
							type="text"
							placeholder={formData?.phone}
							name="tel"
							aria-invalid={errors?.tel ? 'true' : 'false'}
							{...register('tel', { required: true })}
						/>
						{errors?.tel && <p>Telefon jest wymagany</p>}

						<StyledTextarea
							placeholder={formData?.message}
							name="message"
							{...register('message', { required: true, maxLength: 200 })}
						/>
						{errors?.message && <p>Wiadomość jest wymagana.</p>}

						<StyledButton customMargin="1rem 0" type="submit">
							Wyślij
						</StyledButton>

						{formData?.state === 'SUCCESS' && <p>Wiadomość pomyślnie wysłana, dziękujemy!</p>}
						{formData?.state === 'ERROR' && <p>Wystąpił błąd, spróbuj ponownie.</p>}
					</StyledForm>
				</StyledFormWrapper>

				<KontaktItems.KontaktPage contaktitems={contaktitems} color="primary" />
			</StyledFormContainer>

			<StyledMapWrapper>
				<StyledIframe src={map} loading="lazy" title="mapa" />
			</StyledMapWrapper>
		</>
	);
};

export default Contact;
