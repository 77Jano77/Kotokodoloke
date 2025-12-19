// Helper function to ensure team is always an array
// This handles cases where Firebase stores team as an object instead of array
export const safeTeamToArray = (team) => {
    if (!team) return [];
    if (Array.isArray(team)) return team;
    // If team is an object (from Firebase), convert to array
    if (typeof team === 'object') {
        return Object.values(team);
    }
    return [];
};
