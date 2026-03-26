"use client"

import * as React from "react"
import {
    Controller,
    ControllerFieldState,
    ControllerRenderProps,
    FieldValues,
    FormProvider,
    useFormContext,
    UseFormStateReturn,
} from "react-hook-form"

const Form = FormProvider

const FormField = ({...props}) => {
    return <Controller render={function ({field, fieldState, formState,}: {
        field: ControllerRenderProps<FieldValues, string>;
        fieldState: ControllerFieldState;
        formState: UseFormStateReturn<FieldValues>
    }): React.ReactElement {
        throw new Error("Function not implemented.")
    }} name={""} {...props} />
}

const FormItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={className} {...props} />
    )
)
FormItem.displayName = "FormItem"

const FormLabel = React.forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(
    ({ className, ...props }, ref) => <label ref={ref} className={className} {...props} />
)
FormLabel.displayName = "FormLabel"

const FormControl = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ ...props }, ref) => <div ref={ref} {...props} />
)
FormControl.displayName = "FormControl"

const FormDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
    ({ className, ...props }, ref) => <p ref={ref} className={className} {...props} />
)
FormDescription.displayName = "FormDescription"

const FormMessage = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
    ({ className, ...props }, ref) => {
        const { formState } = useFormContext()
        const error = formState.errors?.username
        if (!error) return null

        return (
            <p ref={ref} className={className} {...props}>
                {error.message?.toString()}
            </p>
        )
    }
)
FormMessage.displayName = "FormMessage"

export {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
}