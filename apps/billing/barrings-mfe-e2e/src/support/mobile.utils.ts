export default function formatMobileNumber(mobileNumber: string): string {
  return `${mobileNumber.substring(0, 4)} ${mobileNumber.substring(4, 6)} ${mobileNumber.substring(
    6,
    8
  )} ${mobileNumber.substring(8, 10)}`;
}
