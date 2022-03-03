import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import TemplateForm from "../components/TemplateForm"
import App from '../App';

test("testing if only one radio button is clicked at a time", async () => {
  //passing mockFunction as setDeliveryPrice
  render(<TemplateForm queryHandler={jest.fn()} />)

  const radioElement1 = screen.getByTestId("actionQuery1")
  const radioElement2 = screen.getByTestId("actionQuery2")

  expect(radioElement1).not.toBeChecked()
  fireEvent.click(radioElement1)
  expect(radioElement1).toBeChecked()

  
  expect(radioElement2).not.toBeChecked()
  fireEvent.click(radioElement2)
  expect(radioElement2).toBeChecked()
  expect(radioElement1).not.toBeChecked()
})


test("entering invalid inputs in the number input", async () => {
    //mocking sample test function
    const queryHandlerSpy = jest.fn()
  
    //passing mockFunction as setDeliveryPrice
    render(<TemplateForm queryHandler={queryHandlerSpy} />)
  
    const radioElement1 = screen.getByTestId("actionQuery1")
    fireEvent.click(radioElement1)
    const numberInputElement = screen.getByTestId("numberQuery1")
    fireEvent.change(numberInputElement, { target: { value: "Deepak" } })
    expect(numberInputElement).toHaveValue(null)
  
  })

  

test("submitting valid inputs to the number form", async () => {
    //mocking sample test function
    const queryHandlerSpy = jest.fn()
  
    //passing mockFunction as setDeliveryPrice
    render(<TemplateForm queryHandler={queryHandlerSpy} />)
  
    const radioElement1 = screen.getByTestId("actionQuery1")
    fireEvent.click(radioElement1)
    const numberInputElement = screen.getByTestId("numberQuery1")
    fireEvent.change(numberInputElement, { target: { value: 8 } })
    expect(numberInputElement).toHaveValue(8)
  
    
    const submitButton = screen.getByTestId("submit1")
    //submitting form
    fireEvent.submit(submitButton)
  
    // mock function should be called once
    expect(queryHandlerSpy).toHaveBeenCalled()
  })

  test("regex pattern matching in the text input", async () => {
    expect('1,2,3').toMatch(/^(?:\d+,)*\d+$/)
    expect('1,2,3,200,59').toMatch(/^(?:\d+,)*\d+$/)
    expect('1*2*3').not.toMatch(/^(?:\d+,)*\d+$/)
})
