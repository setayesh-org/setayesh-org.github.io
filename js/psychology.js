// Psychological Analysis Engine for Setayesh's Journey

const PsychologyEngine = {
    // Attachment Style Analysis
    assessAttachmentStyle: (responses) => {
        let scores = {
            secure: 0,
            anxious: 0,
            avoidant: 0,
            disorganized: 0
        };
        
        // Analyze relationship approach responses
        Object.values(responses).forEach(sectionData => {
            if (sectionData.conflict_approach === 'seek_understanding') scores.secure += 2;
            if (sectionData.conflict_approach === 'address_immediately') scores.anxious += 1;
            if (sectionData.conflict_approach === 'need_space') scores.avoidant += 1;
            if (sectionData.conflict_approach === 'avoid_conflict') scores.anxious += 1;
            
            if (sectionData.connection_style === 'secure_trust') scores.secure += 3;
            if (sectionData.connection_style === 'worry_closeness') scores.anxious += 3;
            if (sectionData.connection_style === 'value_independence') scores.avoidant += 2;
            if (sectionData.connection_style === 'mixed_needs') scores.disorganized += 2;
            
            if (sectionData.stress_handling === 'support_together') scores.secure += 2;
            if (sectionData.stress_handling === 'space_then_support') scores.avoidant += 1;
            if (sectionData.stress_handling === 'individual_strength') scores.avoidant += 2;
        });
        
        // Determine primary attachment style
        const maxScore = Math.max(...Object.values(scores));
        const primaryStyle = Object.keys(scores).find(key => scores[key] === maxScore);
        
        return {
            primary: primaryStyle,
            scores: scores,
            confidence: maxScore / (maxScore + Math.max(...Object.values(scores).filter(s => s !== maxScore))) * 100
        };
    },
    
    // Love Languages Analysis
    assessLoveLanguages: (responses) => {
        let languages = {
            words: 0,
            touch: 0,
            time: 0,
            acts: 0,
            gifts: 0
        };
        
        Object.values(responses).forEach(sectionData => {
            if (sectionData.love_language_primary === 'words') languages.words += 3;
            if (sectionData.love_language_primary === 'touch') languages.touch += 3;
            if (sectionData.love_language_primary === 'time') languages.time += 3;
            if (sectionData.love_language_primary === 'acts') languages.acts += 3;
            if (sectionData.love_language_primary === 'gifts') languages.gifts += 3;
            
            if (sectionData.appreciation_style?.includes('verbal')) languages.words += 1;
            if (sectionData.appreciation_style?.includes('physical')) languages.touch += 1;
            if (sectionData.appreciation_style?.includes('time')) languages.time += 1;
            if (sectionData.appreciation_style?.includes('helpful')) languages.acts += 1;
            if (sectionData.appreciation_style?.includes('gifts')) languages.gifts += 1;
        });
        
        // Sort by score
        const sorted = Object.entries(languages).sort((a, b) => b[1] - a[1]);
        
        return {
            primary: sorted[0][0],
            secondary: sorted[1][0],
            scores: languages
        };
    },
    
    // Values Assessment
    assessValues: (responses) => {
        let values = {
            family: 0,
            career: 0,
            spirituality: 0,
            adventure: 0,
            security: 0,
            growth: 0,
            service: 0,
            creativity: 0
        };
        
        Object.values(responses).forEach(sectionData => {
            // Analyze priority rankings
            if (sectionData.priority_rankings) {
                sectionData.priority_rankings.forEach((value, index) => {
                    const score = 6 - index; // Higher priority gets higher score
                    if (values[value] !== undefined) values[value] += score;
                });
            }
            
            // Analyze ideal life responses
            if (sectionData.ideal_life === 'family') values.family += 3;
            if (sectionData.ideal_life === 'career') values.career += 3;
            if (sectionData.ideal_life === 'adventure') values.adventure += 3;
            if (sectionData.ideal_life === 'service') values.service += 3;
            if (sectionData.ideal_life === 'creativity') values.creativity += 3;
            if (sectionData.ideal_life === 'peace') values.spirituality += 2;
            
            // Marriage importance indicates family values
            if (sectionData.marriage_importance >= 8) values.family += 2;
            if (sectionData.marriage_importance >= 6) values.family += 1;
        });
        
        // Normalize scores
        const maxScore = Math.max(...Object.values(values));
        const normalizedValues = {};
        Object.keys(values).forEach(key => {
            normalizedValues[key] = maxScore > 0 ? (values[key] / maxScore) * 10 : 0;
        });
        
        return normalizedValues;
    },
    
    // Communication Style Analysis
    assessCommunicationStyle: (responses) => {
        let styles = {
            direct: 0,
            diplomatic: 0,
            collaborative: 0,
            avoidant: 0,
            assertive: 0
        };
        
        Object.values(responses).forEach(sectionData => {
            if (sectionData.conflict_approach === 'address_immediately') {
                styles.direct += 3;
                styles.assertive += 2;
            }
            if (sectionData.conflict_approach === 'seek_understanding') {
                styles.collaborative += 3;
                styles.diplomatic += 2;
            }
            if (sectionData.conflict_approach === 'avoid_conflict') {
                styles.avoidant += 3;
                styles.diplomatic += 1;
            }
            
            if (sectionData.decision_making === 'joint_decisions') styles.collaborative += 2;
            if (sectionData.decision_making === 'expertise_based') styles.direct += 1;
            if (sectionData.decision_making === 'consensus_required') styles.diplomatic += 2;
        });
        
        const maxScore = Math.max(...Object.values(styles));
        const primaryStyle = Object.keys(styles).find(key => styles[key] === maxScore);
        
        return {
            primary: primaryStyle,
            scores: styles,
            description: this.getStyleDescription(primaryStyle)
        };
    },
    
    // Relationship Readiness Assessment
    assessReadiness: (responses) => {
        let readinessFactors = {
            emotional_maturity: 0,
            self_awareness: 0,
            communication_skills: 0,
            commitment_capacity: 0,
            conflict_resolution: 0,
            life_stability: 0,
            growth_mindset: 0
        };
        
        Object.values(responses).forEach(sectionData => {
            // Emotional maturity indicators
            if (sectionData.past_learning?.includes('communication')) readinessFactors.emotional_maturity += 2;
            if (sectionData.past_learning?.includes('identity')) readinessFactors.emotional_maturity += 2;
            if (sectionData.emotional_availability === 'completely_ready') readinessFactors.emotional_maturity += 3;
            
            // Self-awareness indicators
            if (sectionData.self_reflection_depth >= 8) readinessFactors.self_awareness += 3;
            if (sectionData.values_clarity >= 8) readinessFactors.self_awareness += 2;
            
            // Communication skills
            if (sectionData.conflict_comfort >= 7) readinessFactors.communication_skills += 2;
            if (sectionData.transparency_comfort >= 8) readinessFactors.communication_skills += 3;
            
            // Commitment indicators
            if (sectionData.marriage_importance >= 8) readinessFactors.commitment_capacity += 3;
            if (sectionData.commitment_readiness >= 4) readinessFactors.commitment_capacity += 2;
            
            // Conflict resolution
            if (sectionData.conflict_approach === 'collaborative') readinessFactors.conflict_resolution += 3;
            if (sectionData.repair_willingness >= 8) readinessFactors.conflict_resolution += 2;
            
            // Life stability
            if (sectionData.life_stability >= 7) readinessFactors.life_stability += 3;
            if (sectionData.emotional_availability !== 'healing_focused') readinessFactors.life_stability += 2;
            
            // Growth mindset
            if (sectionData.growth_beliefs?.includes('continuous')) readinessFactors.growth_mindset += 3;
            if (sectionData.learning_orientation >= 8) readinessFactors.growth_mindset += 2;
        });
        
        // Calculate overall readiness score
        const totalPossible = Object.keys(readinessFactors).length * 10;
        const totalActual = Object.values(readinessFactors).reduce((sum, score) => sum + score, 0);
        const overallScore = (totalActual / totalPossible) * 10;
        
        return {
            overallScore: Math.round(overallScore * 10) / 10,
            factors: readinessFactors,
            strengths: this.identifyStrengths(readinessFactors),
            growthAreas: this.identifyGrowthAreas(readinessFactors)
        };
    },
    
    // Compatibility Prediction
    predictCompatibility: (responses) => {
        let compatibilityFactors = {
            values_alignment: 0,
            lifestyle_compatibility: 0,
            communication_match: 0,
            future_vision_sync: 0,
            emotional_compatibility: 0,
            practical_compatibility: 0
        };
        
        // Values alignment
        const values = this.assessValues(responses);
        if (values.family >= 7) compatibilityFactors.values_alignment += 3;
        if (values.security >= 6) compatibilityFactors.values_alignment += 2;
        if (values.growth >= 6) compatibilityFactors.values_alignment += 2;
        
        // Lifestyle compatibility
        Object.values(responses).forEach(sectionData => {
            if (sectionData.work_life_balance === 'balanced') compatibilityFactors.lifestyle_compatibility += 2;
            if (sectionData.social_preferences === 'balanced') compatibilityFactors.lifestyle_compatibility += 2;
            if (sectionData.adventure_stability_balance >= 4 && sectionData.adventure_stability_balance <= 6) {
                compatibilityFactors.lifestyle_compatibility += 3;
            }
        });
        
        // Communication compatibility
        const commStyle = this.assessCommunicationStyle(responses);
        if (commStyle.primary === 'collaborative') compatibilityFactors.communication_match += 3;
        if (commStyle.primary === 'diplomatic') compatibilityFactors.communication_match += 2;
        
        // Future vision synchronization
        Object.values(responses).forEach(sectionData => {
            if (sectionData.children_timeline === 'eventually') compatibilityFactors.future_vision_sync += 2;
            if (sectionData.marriage_timeline <= 24) compatibilityFactors.future_vision_sync += 3;
            if (sectionData.life_planning_alignment >= 8) compatibilityFactors.future_vision_sync += 2;
        });
        
        // Calculate compatibility probability
        const totalPossible = Object.keys(compatibilityFactors).length * 10;
        const totalActual = Object.values(compatibilityFactors).reduce((sum, score) => sum + score, 0);
        const compatibilityScore = (totalActual / totalPossible) * 100;
        
        return {
            overallCompatibility: Math.round(compatibilityScore),
            factors: compatibilityFactors,
            strongSuits: this.identifyStrongSuits(compatibilityFactors),
            potentialChallenges: this.identifyPotentialChallenges(compatibilityFactors)
        };
    },
    
    // Generate Comprehensive Analysis
    generateAnalysis: (responses) => {
        const attachment = this.assessAttachmentStyle(responses);
        const loveLanguages = this.assessLoveLanguages(responses);
        const values = this.assessValues(responses);
        const communication = this.assessCommunicationStyle(responses);
        const readiness = this.assessReadiness(responses);
        const compatibility = this.predictCompatibility(responses);
        
        return {
            participantName: 'Setayesh',
            completionDate: new Date().toISOString(),
            attachment,
            loveLanguages,
            values,
            communication,
            readiness,
            compatibility,
            insights: this.generateInsights(attachment, loveLanguages, values, communication, readiness, compatibility),
            recommendations: this.generateRecommendations(readiness, compatibility)
        };
    },
    
    // Helper Methods
    getStyleDescription: (style) => {
        const descriptions = {
            direct: "Prefers clear, straightforward communication",
            diplomatic: "Values harmony and tactful expression",
            collaborative: "Seeks mutual understanding and joint solutions",
            avoidant: "May need time and space to process before communicating",
            assertive: "Confident in expressing needs and boundaries"
        };
        return descriptions[style] || "";
    },
    
    identifyStrengths: (factors) => {
        const strengths = [];
        Object.entries(factors).forEach(([key, value]) => {
            if (value >= 7) {
                strengths.push(key.replace('_', ' '));
            }
        });
        return strengths;
    },
    
    identifyGrowthAreas: (factors) => {
        const growthAreas = [];
        Object.entries(factors).forEach(([key, value]) => {
            if (value < 5) {
                growthAreas.push(key.replace('_', ' '));
            }
        });
        return growthAreas;
    },
    
    identifyStrongSuits: (factors) => {
        const strongSuits = [];
        Object.entries(factors).forEach(([key, value]) => {
            if (value >= 7) {
                strongSuits.push(key.replace('_', ' '));
            }
        });
        return strongSuits;
    },
    
    identifyPotentialChallenges: (factors) => {
        const challenges = [];
        Object.entries(factors).forEach(([key, value]) => {
            if (value < 5) {
                challenges.push(key.replace('_', ' '));
            }
        });
        return challenges;
    },
    
    generateInsights: (attachment, loveLanguages, values, communication, readiness, compatibility) => {
        const insights = [];
        
        // Attachment insights
        if (attachment.primary === 'secure') {
            insights.push("Strong foundation for lasting relationships with secure attachment patterns");
        } else if (attachment.primary === 'anxious') {
            insights.push("May benefit from reassurance and consistent communication in relationships");
        }
        
        // Love language insights
        insights.push(`Primary love language is ${loveLanguages.primary}, indicating strong need for this type of connection`);
        
        // Values insights
        const topValues = Object.entries(values).sort((a, b) => b[1] - a[1]).slice(0, 3);
        insights.push(`Core values center around ${topValues.map(v => v[0]).join(', ')}`);
        
        // Readiness insights
        if (readiness.overallScore >= 8) {
            insights.push("Demonstrates high readiness for committed relationship");
        } else if (readiness.overallScore >= 6) {
            insights.push("Shows good relationship readiness with some areas for growth");
        }
        
        // Compatibility insights
        if (compatibility.overallCompatibility >= 80) {
            insights.push("Indicates high compatibility potential with similar values and approaches");
        }
        
        return insights;
    },
    
    generateRecommendations: (readiness, compatibility) => {
        const recommendations = [];
        
        if (readiness.overallScore >= 8) {
            recommendations.push("Ready for engagement discussions and marriage planning");
        } else {
            recommendations.push("Continue personal growth work before major commitment decisions");
        }
        
        if (compatibility.overallCompatibility >= 75) {
            recommendations.push("High compatibility suggests strong foundation for marriage");
        } else {
            recommendations.push("Focus on areas of potential challenge before proceeding");
        }
        
        recommendations.push("Consider couples counseling for pre-marital preparation");
        recommendations.push("Continue regular relationship check-ins and communication");
        
        return recommendations;
    }
};

// Export for use in main application
if (typeof window !== 'undefined') {
    window.PsychologyEngine = PsychologyEngine;
}
