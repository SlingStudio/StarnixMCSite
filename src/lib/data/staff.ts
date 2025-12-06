export interface StaffMember {
  userName: string;
  discordUsername: string;
}

export interface StaffRole {
  roleColor: string;
  staffs: StaffMember[];
}

export interface StaffData {
  [role: string]: StaffRole;
}

export const staff: StaffData = {
  Owner: {
    roleColor: "#C084FC",
    staffs: [
      { userName: "MathGamerz", discordUsername: "mathgamerz" },
      { userName: "h4r5h_", discordUsername: "h4r5h_p4t3l" },
    ],
  },
  "Co-Owner": {
    roleColor: "#A78BFA",
    staffs: [
      { userName: "HandsomeShadowYT", discordUsername: "handsomeshadowyt" },
    ],
  },
  "General Manager": { roleColor: "#60A5FA", staffs: [] },
  Operator: {
    roleColor: "#F472B6",
    staffs: [
      { userName: "Cryomancer20", discordUsername: "cryomancer20" },
      { userName: "cyvertray_", discordUsername: "cyvertray" },
    ],
  },
  Executive: { roleColor: "#4B5563", staffs: [] },
  "Discord Head": {
    roleColor: "#9333EA",
    staffs: [{ userName: "TaliOfGaming", discordUsername: "taliofgaming" }],
  },
  "Server Head": {
    roleColor: "#3B82F6",
    staffs: [
      { userName: "dayssling", discordUsername: "daysling" },
      { userName: "amori", discordUsername: "tobixd" },
    ],
  },
  Manager: { roleColor: "#7C3AED", staffs: [] },
  Tech: { roleColor: "#22D3EE", staffs: [] },
  "Social Media Head": { roleColor: "#EC4899", staffs: [] },
  Admin: {
    roleColor: "#FBBF24",
    staffs: [{ userName: "Frowstyyy", discordUsername: "smrkyfaz" }],
  },
  Moderator: {
    roleColor: "#FCD34D",
    staffs: [
      { userName: "ElderlyBubble", discordUsername: "dani_01183" },
      { userName: "XgenPsycho", discordUsername: "mcpsycho" },
    ],
  },
  Builder: { roleColor: "#F9A8D4", staffs: [] },
  "Junior Moderator": {
    roleColor: "#60A5FA",
    staffs: [{ userName: "_frypan", discordUsername: "bigscammer" }],
  },
  "Host Team": { roleColor: "#C084FC", staffs: [] },
};
