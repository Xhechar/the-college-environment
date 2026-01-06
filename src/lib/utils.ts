export function getInitialsFromEmail(email: string) {
  if (!email || typeof email !== "string") return "";

  // Get the part before @
  const namePart = email.split("@")[0];

  // Split by common separators: ".", "_", or "-"
  const parts = namePart.split(/[._-]/).filter(Boolean);

  let initials = "";

  if (parts.length >= 2) {
    // Use first two parts
    initials = parts[0][0] + parts[1][0];
  } else if (parts.length === 1) {
    // If only one part, duplicate first letter
    initials = parts[0][0] + parts[0][1] || parts[0][0];
  }

  return initials.toUpperCase();
}