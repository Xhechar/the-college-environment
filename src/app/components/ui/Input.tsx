type InputProps = {

}

export default function Input({ className, type, ...props }: InputProps & React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={className}
      {...props}
    />
  )
}