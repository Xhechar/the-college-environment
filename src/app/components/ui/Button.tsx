type ButtonProps = {

}

export default function Button({ className, children, ...props }: ButtonProps & React.ComponentProps<"button">) {
  return (
    <button
      className={className}
      {...props}
    >
      {children}
    </button>
  )
}