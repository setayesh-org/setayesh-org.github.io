// Utility Functions for Setayesh's Journey

// DOM Utilities
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const create = (tag, className, textContent) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (textContent) element.textContent = textContent;
    return element;
};

// Local Storage Utilities
const Storage = {
    save: (key, data) => {
        try {
            localStorage.setItem(key, JSON.stringify(data));
            return true;
        } catch (error) {
            console.error('Storage save error:', error);
            return false;
        }
    },
    
    load: (key) => {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Storage load error:', error);
            return null;
        }
    },
    
    remove: (key) => {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.error('Storage remove error:', error);
            return false;
        }
    },
    
    clear: () => {
        try {
            localStorage.clear();
            return true;
        } catch (error) {
            console.error('Storage clear error:', error);
            return false;
        }
    }
};

// Animation Utilities
const Animation = {
    fadeIn: (element, duration = 300) => {
        element.style.opacity = '0';
        element.style.display = 'block';
        
        let start = null;
        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            
            element.style.opacity = Math.min(progress / duration, 1);
            
            if (progress < duration) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);
    },
    
    fadeOut: (element, duration = 300) => {
        let start = null;
        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            
            element.style.opacity = Math.max(1 - (progress / duration), 0);
            
            if (progress < duration) {
                requestAnimationFrame(animate);
            } else {
                element.style.display = 'none';
            }
        };
        
        requestAnimationFrame(animate);
    },
    
    slideIn: (element, direction = 'up', duration = 300) => {
        const directions = {
            up: 'translateY(30px)',
            down: 'translateY(-30px)',
            left: 'translateX(30px)',
            right: 'translateX(-30px)'
        };
        
        element.style.transform = directions[direction];
        element.style.opacity = '0';
        element.style.display = 'block';
        
        let start = null;
        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const easing = progress / duration;
            
            element.style.opacity = Math.min(easing, 1);
            element.style.transform = `translateX(${30 * (1 - easing)}px) translateY(${30 * (1 - easing)}px)`;
            
            if (progress < duration) {
                requestAnimationFrame(animate);
            } else {
                element.style.transform = 'none';
            }
        };
        
        requestAnimationFrame(animate);
    }
};

// Event Utilities
const Events = {
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    throttle: (func, limit) => {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
};

// Validation Utilities
const Validation = {
    isEmail: (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    },
    
    isEmpty: (value) => {
        return !value || value.trim() === '';
    },
    
    isInRange: (value, min, max) => {
        return value >= min && value <= max;
    }
};

// Math Utilities
const MathUtils = {
    random: (min, max) => {
        return Math.random() * (max - min) + min;
    },
    
    randomInt: (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    
    clamp: (value, min, max) => {
        return Math.min(Math.max(value, min), max);
    },
    
    lerp: (start, end, progress) => {
        return start + (end - start) * progress;
    }
};

// Time Utilities
const TimeUtils = {
    formatDuration: (milliseconds) => {
        const minutes = Math.floor(milliseconds / 60000);
        const seconds = Math.floor((milliseconds % 60000) / 1000);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    },
    
    formatTime: (date = new Date()) => {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
    },
    
    formatDate: (date = new Date()) => {
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
};

// Device Detection
const Device = {
    isMobile: () => {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    },
    
    isTablet: () => {
        return /iPad|Android/i.test(navigator.userAgent) && window.innerWidth >= 768;
    },
    
    isDesktop: () => {
        return !Device.isMobile() && !Device.isTablet();
    },
    
    hasTouch: () => {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    }
};

// Color Utilities
const ColorUtils = {
    hexToRgb: (hex) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    },
    
    rgbToHex: (r, g, b) => {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    },
    
    generatePalette: (baseColor, count = 5) => {
        const colors = [];
        const rgb = ColorUtils.hexToRgb(baseColor);
        
        for (let i = 0; i < count; i++) {
            const factor = 0.3 + (i * 0.4 / count);
            colors.push(ColorUtils.rgbToHex(
                Math.floor(rgb.r * factor),
                Math.floor(rgb.g * factor),
                Math.floor(rgb.b * factor)
            ));
        }
        
        return colors;
    }
};

// Analytics Utilities
const Analytics = {
    track: (event, data = {}) => {
        // Privacy-first analytics - only track anonymous usage patterns
        console.log('Event tracked:', event, data);
        
        // Store locally for insights
        const events = Storage.load('analytics_events') || [];
        events.push({
            event,
            data,
            timestamp: Date.now(),
            session: Storage.load('session_id') || 'anonymous'
        });
        
        // Keep only last 100 events
        if (events.length > 100) {
            events.splice(0, events.length - 100);
        }
        
        Storage.save('analytics_events', events);
    },
    
    getInsights: () => {
        const events = Storage.load('analytics_events') || [];
        const insights = {};
        
        events.forEach(event => {
            if (!insights[event.event]) {
                insights[event.event] = 0;
            }
            insights[event.event]++;
        });
        
        return insights;
    }
};

// Error Handling
const ErrorHandler = {
    log: (error, context = '') => {
        console.error('Application Error:', error, context);
        
        // Store error for debugging
        const errors = Storage.load('app_errors') || [];
        errors.push({
            error: error.toString(),
            context,
            timestamp: Date.now(),
            userAgent: navigator.userAgent
        });
        
        // Keep only last 50 errors
        if (errors.length > 50) {
            errors.splice(0, errors.length - 50);
        }
        
        Storage.save('app_errors', errors);
    },
    
    notify: (message, type = 'error') => {
        const notification = create('div', `notification ${type}`);
        notification.innerHTML = `
            <i class="fas fa-${type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button onclick="this.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        document.body.appendChild(notification);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 5000);
    }
};

// Export for module use (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        $, $$, create,
        Storage,
        Animation,
        Events,
        Validation,
        MathUtils,
        TimeUtils,
        Device,
        ColorUtils,
        Analytics,
        ErrorHandler
    };
}
