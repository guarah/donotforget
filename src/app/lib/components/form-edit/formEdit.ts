export class FormEdit {
  constructor(
    public fields: {label: string, field: string, type: string }[ ],
    public saveLabel: string,
    public cancelLabel: string
  ) { }
}
